input.onButtonPressed(Button.A, function () {
    for (let カウンター = 0; カウンター <= 16; カウンター++) {
        配列[カウンター] = "00"
    }
    scrollbit.clear()
    scrollbit.show()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    配列.shift()
    配列.push(bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop)))
    scrollbit.clear()
    for (let カウンター = 0; カウンター <= 16; カウンター++) {
        データ = 配列[カウンター].charAt(0)
        if (データ == "1") {
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (データ == "2") {
            scrollbit.setPixel(カウンター, 1, 128)
        } else if (データ == "3") {
            scrollbit.setPixel(カウンター, 1, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (データ == "4") {
            scrollbit.setPixel(カウンター, 0, 128)
        } else if (データ == "5") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (データ == "6") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 1, 128)
        } else if (データ == "7") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 1, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else {
        	
        }
        データ = 配列[カウンター].charAt(1)
        if (データ == "1") {
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "2") {
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "3") {
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "4") {
            scrollbit.setPixel(カウンター, 4, 128)
        } else if (データ == "5") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "6") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "7") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "8") {
            scrollbit.setPixel(カウンター, 3, 128)
        } else if (データ == "9") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "A") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "B") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "C") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
        } else if (データ == "D") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "E") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "F") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else {
        	
        }
    }
    scrollbit.show()
})
let 配列: string[] = []
let データ = ""
bluetooth.startUartService()
scrollbit.clear()
scrollbit.show()
データ = ""
配列 = []
for (let index = 0; index < 17; index++) {
    配列.push("00")
}
