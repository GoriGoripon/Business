@echo off

echo.
echo FlashPlayer のバージョン情報を参照
reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Macromedia\FlashPlayer" /v "CurrentVersion"