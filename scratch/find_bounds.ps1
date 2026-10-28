Add-Type -AssemblyName System.Drawing
$filePath = "C:\Users\ISARVA\.gemini\antigravity-ide\brain\77c89663-b94d-4f1c-933b-1d5f0a6e3d27\.user_uploaded\media_1793092417593.png"
$source = [System.Drawing.Bitmap]::FromFile($filePath)

# Let's inspect the cards row in detail.
# Total width: 788, Height: 375.
# Let's find exactly where Card 1, Card 2, Card 3 start and end.
# Look at Y around 300 across X:
for ($x = 50; $x -lt 750; $x += 10) {
    $c = $source.GetPixel($x, 300)
    # Write-Output "X=$x: R=$($c.R) G=$($c.G) B=$($c.B)"
}

# Card 1 image is laptop: Let's find its exact bounds
# Look between X=60 and X=160, Y=280 and Y=360
$minX1 = 788; $maxX1 = 0; $minY1 = 375; $maxY1 = 0
for ($x = 60; $x -lt 160; $x++) {
    for ($y = 280; $y -lt 360; $y++) {
        $c = $source.GetPixel($x, $y)
        # If not pure white background of card (white is R>250, G>250, B>250)
        if (!($c.R -gt 250 -and $c.G -gt 250 -and $c.B -gt 250)) {
            if ($x -lt $minX1) { $minX1 = $x }
            if ($x -gt $maxX1) { $maxX1 = $x }
            if ($y -lt $minY1) { $minY1 = $y }
            if ($y -gt $maxY1) { $maxY1 = $y }
        }
    }
}
Write-Output "Thumbnail 1: X=$minX1 to $maxX1 (w=$($maxX1-$minX1)), Y=$minY1 to $maxY1 (h=$($maxY1-$minY1))"

# Card 2 image is meeting:
$minX2 = 788; $maxX2 = 0; $minY2 = 375; $maxY2 = 0
for ($x = 280; $x -lt 380; $x++) {
    for ($y = 280; $y -lt 360; $y++) {
        $c = $source.GetPixel($x, $y)
        if (!($c.R -gt 250 -and $c.G -gt 250 -and $c.B -gt 250)) {
            if ($x -lt $minX2) { $minX2 = $x }
            if ($x -gt $maxX2) { $maxX2 = $x }
            if ($y -lt $minY2) { $minY2 = $y }
            if ($y -gt $maxY2) { $maxY2 = $y }
        }
    }
}
Write-Output "Thumbnail 2: X=$minX2 to $maxX2 (w=$($maxX2-$minX2)), Y=$minY2 to $maxY2 (h=$($maxY2-$minY2))"

# Card 3 image is AI Robot:
$minX3 = 788; $maxX3 = 0; $minY3 = 375; $maxY3 = 0
for ($x = 510; $x -lt 620; $x++) {
    for ($y = 280; $y -lt 360; $y++) {
        $c = $source.GetPixel($x, $y)
        if (!($c.R -gt 250 -and $c.G -gt 250 -and $c.B -gt 250)) {
            if ($x -lt $minX3) { $minX3 = $x }
            if ($x -gt $maxX3) { $maxX3 = $x }
            if ($y -lt $minY3) { $minY3 = $y }
            if ($y -gt $maxY3) { $maxY3 = $y }
        }
    }
}
Write-Output "Thumbnail 3: X=$minX3 to $maxX3 (w=$($maxX3-$minX3)), Y=$minY3 to $maxY3 (h=$($maxY3-$minY3))"

$source.Dispose()
