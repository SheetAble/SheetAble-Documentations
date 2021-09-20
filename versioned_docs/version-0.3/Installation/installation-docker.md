---
sidebar_position: 2
---

# Installation with Docker
## Prerequisites
In case you do **not** have Docker installed on your machine here are the URLs:
- Install on [Mac](https://docs.docker.com/desktop/mac/install/)
- Install on [Windows](https://docs.docker.com/desktop/windows/install/)
- Install on [Linux](https://docs.docker.com/engine/install/)
## Install it via Docker CLI
With the Docker CLI it is pretty simple. You just need to run one command:
```sh
❯ docker run -p 80:8080 vallezw/sheetable 
```
### Port
As you can see in the command above the image exposes the **8080** port.
### Volumes
If you want to save the data (uploaded sheets, etc) in a docker volume you have to add
`-v your_volume:/app/config`.
In case you do not know how volumes work here the [official Docker docs](https://docs.docker.com/storage/volumes/) to that topic.

## Docker composer file
An example docker-composer file would look like this:
```yml
---
version: "3"

services:
  sheetable:
    container_name: sheetable
    restart: unless-stopped
    image: vallezw/sheetable
    ports:
      - 8080:3006
    environment:
      - PORT:3006
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /local/path/config/dir:/app/config
```

## Login Data
:::tip Login Data
The default login credentials for the admin user are:
- **Email:** admin<span></span>@admin.com
- **Password:** sheetable
**To configure** those and/or change other settings use the [Configuration guide](/docs/configuration)
:::
