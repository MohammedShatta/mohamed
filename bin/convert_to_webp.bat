@echo off
setlocal enabledelayedexpansion

REM مسارات الإدخال والإخراج
set "INPUT=%~dp0..\images"
set "OUTPUT=%~dp0..\output"

echo ✅ جاري تحويل الصور إلى WebP...

REM التكرار على الصور
for /R "%INPUT%" %%f in (*.jpg *.jpeg *.png) do (
    set "full=%%~f"
    set "rel=%%~f"
    set "rel=!rel:%INPUT%=!"

    REM إزالة أول \
    if "!rel:~0,1!"=="\" set "rel=!rel:~1!"

    REM استخراج المسار النهائي
    set "outfile=%OUTPUT%\!rel!.webp"

    REM إنشاء المجلد اللي هيحتوي الصورة
    for %%a in ("!outfile!") do (
        mkdir "%%~dpa" >nul 2>&1
    )

    REM تنفيذ التحويل
    ..\bin\cwebp.exe "%%f" -q 80 -o "!outfile!"

    echo 🖼️ تم تحويل: !rel!
)

echo.
echo 🎉 كل الصور اتحولت بنجاح!
pause

