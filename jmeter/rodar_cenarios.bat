@echo off

where jmeter >nul 2>nul
if errorlevel 1 (
  echo [ERRO] O comando "jmeter" nao foi encontrado no PATH.
  echo Instale o Apache JMeter e adicione a pasta "bin" dele ao PATH, ou rode
  echo este .bat a partir de um prompt onde "jmeter" ja funcione.
  exit /b 1
)

set RAMPUP=5
set DURATION=60
set HOST=localhost
set PORT=8081

set SCRIPT_DIR=%~dp0
set PLAN=%SCRIPT_DIR%plano_carga_comandas.jmx
set OUTDIR=%SCRIPT_DIR%resultados

if not exist "%OUTDIR%" mkdir "%OUTDIR%"

echo.
echo ==================== Cenario: 10 usuarios ====================
if exist "%OUTDIR%\resultado_10.jtl" del /q "%OUTDIR%\resultado_10.jtl"
if exist "%OUTDIR%\html_10" rmdir /s /q "%OUTDIR%\html_10"
call jmeter -n -t "%PLAN%" -Jthreads=10 -Jrampup=%RAMPUP% -Jduration=%DURATION% -Jhost=%HOST% -Jport=%PORT% -l "%OUTDIR%\resultado_10.jtl" -e -o "%OUTDIR%\html_10"

echo.
echo ==================== Cenario: 25 usuarios ====================
if exist "%OUTDIR%\resultado_25.jtl" del /q "%OUTDIR%\resultado_25.jtl"
if exist "%OUTDIR%\html_25" rmdir /s /q "%OUTDIR%\html_25"
call jmeter -n -t "%PLAN%" -Jthreads=25 -Jrampup=%RAMPUP% -Jduration=%DURATION% -Jhost=%HOST% -Jport=%PORT% -l "%OUTDIR%\resultado_25.jtl" -e -o "%OUTDIR%\html_25"

echo.
echo ==================== Cenario: 50 usuarios ====================
if exist "%OUTDIR%\resultado_50.jtl" del /q "%OUTDIR%\resultado_50.jtl"
if exist "%OUTDIR%\html_50" rmdir /s /q "%OUTDIR%\html_50"
call jmeter -n -t "%PLAN%" -Jthreads=50 -Jrampup=%RAMPUP% -Jduration=%DURATION% -Jhost=%HOST% -Jport=%PORT% -l "%OUTDIR%\resultado_50.jtl" -e -o "%OUTDIR%\html_50"

echo.
echo ==================== Cenario: 100 usuarios ====================
if exist "%OUTDIR%\resultado_100.jtl" del /q "%OUTDIR%\resultado_100.jtl"
if exist "%OUTDIR%\html_100" rmdir /s /q "%OUTDIR%\html_100"
call jmeter -n -t "%PLAN%" -Jthreads=100 -Jrampup=%RAMPUP% -Jduration=%DURATION% -Jhost=%HOST% -Jport=%PORT% -l "%OUTDIR%\resultado_100.jtl" -e -o "%OUTDIR%\html_100"

echo.
echo ==================== Cenario: 200 usuarios ====================
if exist "%OUTDIR%\resultado_200.jtl" del /q "%OUTDIR%\resultado_200.jtl"
if exist "%OUTDIR%\html_200" rmdir /s /q "%OUTDIR%\html_200"
call jmeter -n -t "%PLAN%" -Jthreads=200 -Jrampup=%RAMPUP% -Jduration=%DURATION% -Jhost=%HOST% -Jport=%PORT% -l "%OUTDIR%\resultado_200.jtl" -e -o "%OUTDIR%\html_200"

echo.
echo ==================== Cenario: 500 usuarios ====================
if exist "%OUTDIR%\resultado_500.jtl" del /q "%OUTDIR%\resultado_500.jtl"
if exist "%OUTDIR%\html_500" rmdir /s /q "%OUTDIR%\html_500"
call jmeter -n -t "%PLAN%" -Jthreads=500 -Jrampup=%RAMPUP% -Jduration=%DURATION% -Jhost=%HOST% -Jport=%PORT% -l "%OUTDIR%\resultado_500.jtl" -e -o "%OUTDIR%\html_500"

echo.
echo Todos os cenarios rodaram. Gerando tabela comparativa...
call python "%SCRIPT_DIR%analisar_resultados.py" "%OUTDIR%"

echo.
echo Concluido. Veja os relatorios HTML completos em %OUTDIR%\html_^<N^>\index.html
