# Configuration
Currently, the only way to change most settings in SheetAble is through the env variables.

## How to change environment variables

### Change vars in Docker
To change the env variables in Docker you just have to customize your running command by adding a `-e SETTING="SETTING_VALUE"` to it.

### Change vars natively
You can also change env variables natively. 
- Either you add a `.env` file in the running directory (recommended)
  - The file should look like this:
	```env
	SETTING=SETTING_VALUE
	NEXT_SETTING=NEXT_SETTING_VALUE
	```
- You export the env var on your OS
  - **Windows**:
     - `C:\> SET SETTING="SETTING_VALUE"`
   - Unix based systems (**Mac**, **Linux**):
     - `export SETTING=SETTING_VALUE`

## Available Settings
| Setting        | Explanation                                                                      |
|----------------|----------------------------------------------------------------------------------|
| API_SECRET     | This can be any string you want with which your jwt key is going to be encrypted |
| DB_DRIVER      | mysql, postgres, sqlite                                                          |
| DB_HOST        | Use mysql or postgres? Enter IP here.                                            |
| DB_USER        | Use mysql or postgres? Enter db username here.                                   |
| DB_PASSWORD    | Use mysql or postgres? Enter db password here.                                   |
| DB_NAME        | Use mysql or postgres? Enter db name here.                                       |
| DB_PORT        | Use mysql or postgres? Enter db port here.                                       |
| ADMIN_EMAIL    | Your admin email                                                                 |
| ADMIN_PASSWORD | Your admin password                                                              |

[Get sample .env file here](https://raw.githubusercontent.com/SheetAble/SheetAble-Documentations/main/static/files/.env.sample)