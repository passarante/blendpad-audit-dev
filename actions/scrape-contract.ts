


import puppeteer from "puppeteer"
//import ace from "react-ace";
//import ace from 'react-ace';
//import ace from 'react-ace';
//import ace from 'react-ace';
//import ace from 'react-ace';




export const getContractCount = async (url: string) => {

    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        const navigationPromise = page.waitForNavigation({
            waitUntil: 'networkidle0',
            timeout: 120000
        })

        let code;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 })



        let editor = await page.waitForSelector('xpath///*[@id="dividcode"]/div[1]/div[2]/span[1]', { timeout: 10000 })

        if (editor) {

            code = await editor.evaluate((el) => el.textContent);

        }

        return code?.split("of")[1][1];

    } catch (error) {
        console.log(error);
        return null
    }

}

export const getContractDetails = async (url: string) => {



    if (2 < 5) {




        try {
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            const navigationPromise = page.waitForNavigation({
                waitUntil: 'networkidle0',
                timeout: 120000
            })
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 })


            const contracts = await page.evaluate(async () => {


                const data = []

                const editor1 = ace.edit("editor1");
                const code1 = editor1.getValue();
                const editor2 = ace.edit("editor2");
                const code2 = editor2.getValue();
                data.push(code1)
                data.push(code2)


                return data;

            })

      

            // await page.addScriptTag({
            //     url: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
            // })


            // await navigationPromise;

            // const isJQueryLoaded = await page.evaluate(() => !!window?.jQuery);
            // if (!isJQueryLoaded) {
            //     throw new Error("JQuery not loaded")
            // }

            // const data = await page.evaluate(() => {
            //     const $ = window.jQuery;
            //     const datax = [];
            //     datax.push($('#editor1').text());
            //     return datax;
            // })

             await browser.close();
            // console.log(data);

            return { status: "ok",contracts };

        } catch (error) {
            console.log(error);
            return { status: "error", success: false };
        }
    }
}
