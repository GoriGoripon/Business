@rem ----------------------------------------------------
@rem ���̃o�b�`�ł͒ʏ�g���v�����^�[�̐ݒ��ύX���܂�
@rem ----------------------------------------------------


@echo off


echo.
echo �ʏ�g���v�����^�[�̒l���Q��
reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v "LegacyDefaultPrinterMode"


echo.
echo �ʏ�g���v�����^�[�̒l��ύX
reg add   "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v "LegacyDefaultPrinterMode" /t "REG_DWORD" /d "1" /f


echo.
echo �ʏ�g���v�����^�[�̒l���Q��
reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v "LegacyDefaultPrinterMode"
