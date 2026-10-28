Add-Type -AssemblyName System.Drawing
$filePath = "F:\IsarvaIt-Nextjs-wordpress\Collaborative Tech Team in Modern Office.png"
$img = [System.Drawing.Bitmap]::FromFile($filePath)
Write-Output "Image size: $($img.Width)x$($img.Height)"
$c1 = $img.GetPixel(100, 200)
$c2 = $img.GetPixel(500, 200)
$c3 = $img.GetPixel(1200, 200)
Write-Output "Left (100,200): R=$($c1.R) G=$($c1.G) B=$($c1.B)"
Write-Output "Mid-left (500,200): R=$($c2.R) G=$($c2.G) B=$($c2.B)"
Write-Output "Right (1200,200): R=$($c3.R) G=$($c3.G) B=$($c3.B)"
$img.Dispose()
