import { useState, useEffect } from "react";

// fetch using .then(), .catch()

// function useCurrInfo(country) {
//     const [data, setData] = useState({});
//     const [error, setError] = useState("");
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${country}.json`).then((res) => {
//             return res.json()
//         }).then((res) => {
//             setData(res[country]);
//         }).catch((er) => {
//             setError(er);
//         });
//     }, [country])
//     console.log(data);
//     console.log(error);
//     return data;
// }


// fetch using async await
function useCurrInfo(country, date = 'latest') {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const p = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/${country}.json`);
                const result = await p.json();
                setData(result[country]);
                console.log(result[country]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [country, date]);
    return data;
}

export default useCurrInfo;