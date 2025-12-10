# GitHub Actions Deployment Workflows

This directory contains automated deployment workflows for the portfolio website.

## FTP Deployment Workflow

The `deploy.yml` workflow automatically deploys your website to an FTP server whenever you push to the main branch.

### How It Works

1. **Trigger**: Runs on push to `main` branch or when a pull request is merged
2. **Checkout**: Downloads your repository code
3. **Deploy**: Uploads files to your FTP server
4. **Exclude**: Automatically excludes Git files, node_modules, and development files

### Setup Instructions

#### 1. Get Your FTP Credentials

Contact your web hosting provider to get:
- **FTP Server**: (e.g., `ftp.yourhost.com` or `yoursite.com`)
- **FTP Username**: (e.g., `youruser@yoursite.com`)
- **FTP Password**: Your FTP password
- **Server Directory**: The folder where files should go (e.g., `/public_html/`, `/www/`, `/htdocs/`, or just `/`)

#### 2. Add Secrets to GitHub Repository

1. Go to your repository on GitHub: https://github.com/ap0894/portfolio
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add these four secrets one by one:

   | Name | Value | Example |
   |------|-------|---------|
   | `FTP_SERVER` | Your FTP server address | `ftp.yourhost.com` |
   | `FTP_USERNAME` | Your FTP username | `user@yoursite.com` |
   | `FTP_PASSWORD` | Your FTP password | `your-password-here` |
   | `FTP_SERVER_DIR` | Remote directory path | `/public_html/` or `/` |

   **Important**: For `FTP_SERVER_DIR`:
   - Must end with `/` (e.g., `/public_html/`)
   - Use `/` for root directory
   - Ask your host if you're unsure

#### 3. Test the Deployment

Once secrets are added, the workflow will run automatically on your next push:

```bash
# Make a small change
echo "# Test" >> test.txt

# Commit and push
git add .
git commit -m "Test FTP deployment"
git push
```

#### 4. Monitor Deployment

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see the workflow running
4. Click on it to view logs and progress

### Workflow Status

You can add a status badge to your README:

```markdown
![Deploy Status](https://github.com/ap0894/portfolio/actions/workflows/deploy.yml/badge.svg)
```

### Configuration Options

You can customize the workflow by editing `.github/workflows/deploy.yml`:

#### Deploy Only Specific Files

Add more exclusions in the `exclude` section:

```yaml
exclude: |
  **/.git*
  **/node_modules/**
  **/README.md
  **/tests/**
  **/*.md
```

#### Clean Deployment (Delete All Files First)

⚠️ **Use with extreme caution!** This deletes all files on the server before uploading:

```yaml
dangerous-clean-slate: true
```

#### Test Without Actually Deploying

```yaml
dry-run: true
```

#### Enable Verbose Logging

```yaml
log-level: verbose
```

### Troubleshooting

#### Deployment Fails

1. **Check Secrets**: Make sure all four secrets are set correctly
2. **Check Server Dir**: Ensure `FTP_SERVER_DIR` ends with `/`
3. **Check Credentials**: Verify FTP username and password
4. **Check Logs**: View the Actions tab for detailed error messages

#### Files Not Uploading

1. Check the `exclude` list - you might be accidentally excluding files
2. Verify your FTP server allows file uploads
3. Check file permissions on your FTP server

#### Connection Issues

1. Some hosts require SFTP instead of FTP - see SFTP section below
2. Check if your host requires a specific port (default is 21 for FTP)
3. Verify firewall settings with your host

## Alternative: SFTP Deployment

If your host requires SFTP (more secure than FTP), create `deploy-sftp.yml`:

```yaml
name: Deploy to SFTP Server

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy via SFTP
        uses: wlixcc/SFTP-Deploy-Action@v1.2.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          remote_path: ${{ secrets.FTP_SERVER_DIR }}
          sftp_only: true
```

### Using SSH Key Instead of Password (More Secure)

1. Generate an SSH key pair:
   ```bash
   ssh-keygen -t rsa -b 4096 -f deploy_key
   ```

2. Add `deploy_key.pub` to your server's `~/.ssh/authorized_keys`

3. Add the private key as `SSH_PRIVATE_KEY` secret in GitHub

4. Update workflow:
   ```yaml
   - name: Deploy via SFTP with SSH Key
     uses: wlixcc/SFTP-Deploy-Action@v1.2.4
     with:
       server: ${{ secrets.FTP_SERVER }}
       username: ${{ secrets.FTP_USERNAME }}
       ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }}
       remote_path: ${{ secrets.FTP_SERVER_DIR }}
   ```

## Security Best Practices

1. ✅ **Never** commit FTP credentials to your repository
2. ✅ **Always** use GitHub Secrets for sensitive data
3. ✅ Use SFTP instead of FTP when possible (more secure)
4. ✅ Use SSH keys instead of passwords when possible
5. ✅ Regularly rotate your FTP/SFTP passwords
6. ✅ Review deployment logs for any issues

## Support

- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **FTP-Deploy-Action**: https://github.com/SamKirkland/FTP-Deploy-Action
- **SFTP-Deploy-Action**: https://github.com/wlixcc/SFTP-Deploy-Action

## Questions?

If you encounter any issues, check:
1. GitHub Actions logs (in the Actions tab)
2. Your web host's documentation
3. The action's documentation on GitHub
