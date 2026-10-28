Add-Type -AssemblyName System.Drawing
$filePath = "F:\IsarvaIt-Nextjs-wordpress\Collaborative Tech Team in Modern Office.png"
$img = [System.Drawing.Image]::FromFile($filePath)
Write-Output "Team image dimensions: $($img.Width) x $($img.Height)"
$img.Dispose()
