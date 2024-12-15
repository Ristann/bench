  {
            name: "choice",
            type: "list",
            message: "Сеть:",
            choices: [
                {
                    name: "Ethereum",
                    value: "ETH",
                },
                {
                    name: "Arbitrum",
                    value: "Arbitrum",
                },
                {
                    name: "Optimism",
                    value: "Optimism",
                },
                {
                    name: "Polygon",
                    value: "Polygon",
                },
                {
                    name: "BSC",
                    value: "BSC",
                },
                {
                    name: "opBNB",
                    value: "opBNB",
                },
                {
                    name: "Avalanche",
                    value: "Avalanche",
                },

                {
                    name: "Base",
                    value: "Base",
                },
                {
                    name: "Core",
                    value: "Core",
                },
                {
                    name: "Celo",
                    value: "Celo",
                },
                {
                    name: "Klaytn",
                    value: "Klaytn",
                },
                {
                    name: "Fantom",
                    value: "Fantom",
                },
                {
                    name: "Moonbeam",
                    value: "Moonbeam",
                },
                {
                    name: "Moonriver",
                    value: "Moonriver",
                },
                {
                    name: "Manta",
                    value: "Manta",
                },
                {
                    name: "Zero",
                    value: "Zero",
                }
            ],
            default: "web",
            loop: false,
        },
    ]

    const answers = await inquirer.prompt(questions)
    return answers.choice
}

export const evmNetwork = async () => {
    const questions = [
        {
            name: "choice",
            type: "list",
            message: "Сеть:",
            choices: [
                {
                    name: "Ethereum",
                    value: "eth",
                },
                {
                    name: "Arbitrum",
                    value: "arbitrum",
                },
                {
                    name: "Optimism",
                    value: "optimism",
                },
                {
                    name: "Polygon",
                    value: "polygon",
                },
                {
                    name: "BSC",
                    value: "bsc",
                }
            ],
            default: "web",
            loop: false,
        },
    ]

    const answers = await inquirer.prompt(questions)
    return answers.choice
}

export function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value)
}

export function newAbortSignal(timeoutMs) {
    const abortController = new AbortController()
    setTimeout(() => abortController.abort(), timeoutMs || 0)

    return abortController.signal
}

let proxies = readWallets('./user_data/proxies.txt')

export function getProxy(index, isRandom = false) {
    let agent
    let proxy = null
    if (proxies.length) {
        if (proxies[index]) {
            if (isRandom) {
                proxy = proxies[random(0, Math.max(proxies.length - 1, 0))]
            } else {
                proxy = proxies[index]
            }
        } else {
            proxy = proxies[0]
        }
    }
