@rem ----------------------------------------------------
@rem このバッチでは通常使うプリンターの設定を変更します
@rem ----------------------------------------------------


@echo off


echo.
echo 通常使うプリンターの値を参照
reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v "LegacyDefaultPrinterMode"


echo.
echo 通常使うプリンターの値を変更
reg add   "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v "LegacyDefaultPrinterMode" /t "REG_DWORD" /d "1" /f


echo.
echo 通常使うプリンターの値を参照
reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v "LegacyDefaultPrinterMode"
