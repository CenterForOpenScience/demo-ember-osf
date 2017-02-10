# Cloud 9

[Cloud 9](https://c9.io/) is an online integrated development environment with an Ubuntu workspace. It offers the 
ability to quickly get started with a free, public, and shareable workspace. The following steps will ensure that your
Cloud 9 environment is set properly.

1. Create a new workspace
  - Use the https git url (not the ssh git url) for the *Clone from Git* field
1. (In the terminal) Run `git checkout <branch>`, where <branch> is the branch name (e.g. `develop`)
1. Run `. ./setup/cloud9.sh`
1. Toolbar → Run → Run Configurations → New Run Configurations
  1. Give it a name (e.g. `serve`)
  1. Command: `ember server`
  1. Click ENV
    - BACKEND stage
    - PORT 8080
1. Go to http://[workspace-name]-[username].c9users.io/

## Notes
* The Cloud 9 environment does not support docker at this time.
* The setup script sets the default port to 8080, which is necessary to proxy requests to the ember development server.
