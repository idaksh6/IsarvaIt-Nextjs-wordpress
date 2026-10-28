Add-Type -AssemblyName System.Drawing
$filePath = "C:\Users\ISARVA\.gemini\antigravity-ide\brain\77c89663-b94d-4f1c-933b-1d5f0a6e3d27\.user_uploaded\media_1793092417593.png"
$source = [System.Drawing.Bitmap]::FromFile($filePath)

function Crop-Image($src, $rect, $outputPath) {
    # 2x upscale with high quality bicubic for crisp rendering on retina displays
    $targetW = $rect.Width * 2
    $targetH = $rect.Height * 2
    $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)
    $g.DrawImage($src, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved 2x: $outputPath ($targetW x $targetH)"
}

# Accurate bounds of the images inside the cards:
# Image 1 (Website Services): X=66, Y=282, W=75, H=74
$rect1 = New-Object System.Drawing.Rectangle(66, 282, 75, 74)
# Image 2 (Custom Software): X=287, Y=282, W=80, H=74
$rect2 = New-Object System.Drawing.Rectangle(287, 282, 80, 74)
# Image 3 (AI & ML): X=522, Y=282, W=80, H=74
$rect3 = New-Object System.Drawing.Rectangle(522, 282, 80, 74)

Crop-Image $source $rect1 "f:\IsarvaIt-Nextjs-wordpress\public\images\hero-card-website.png"
Crop-Image $source $rect2 "f:\IsarvaIt-Nextjs-wordpress\public\images\hero-card-software.png"
Crop-Image $source $rect3 "f:\IsarvaIt-Nextjs-wordpress\public\images\hero-card-ai.png"

$source.Dispose()
