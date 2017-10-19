const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

let start = async () => {
    await Promise.all([1, 2, 3].forEach(async num => {
        await waitFor(50);
        console.log(num);
    }))
    console.log("done");
}

start();
