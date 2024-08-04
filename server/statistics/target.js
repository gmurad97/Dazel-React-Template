const goal = Math.floor(Math.random() * (750000 - 100000 + 1)) + 100000;

const target = () => {
    return {
        goal: 654328,
        all_date: {
            revenue: 598431,
            progress: parseFloat((598431 / 654328 * 100).toFixed(2)),
            change: 15.4,
            earnings_today: 134
        },
        "12_months": {
            revenue: 473290,
            progress: parseFloat((473290 / 654328 * 100).toFixed(2)),
            change: 12.8,
            earnings_today: 124
        },
        "30_days": {
            revenue: 39852,
            progress: parseFloat((39852 / 654328 * 100).toFixed(2)),
            change: 3.7,
            earnings_today: 115
        },
        "7_days": {
            revenue: 10978,
            progress: parseFloat((10978 / 654328 * 100).toFixed(2)),
            change: 1.2,
            earnings_today: 89
        },
        "24_hour": {
            revenue: 1589,
            progress: parseFloat((1589 / 654328 * 100).toFixed(2)),
            change: 0.3,
            earnings_today: 78
        }
    }
}

module.exports = target;