// Find out how much you have spent on battle.net. Go to https://account.battle.net/transactions , log in and run following script.
// Only works with NA region.

fetch("https://account.battle.net/api/transactions?regionId=1")
  .then((res) => res.json())
  .then((res) => {
    let totalP = 0;
    res.purchases.forEach((r) => {
      if (
        r.formattedTotal.startsWith("$") ||
        r.formattedTotal.startsWith("-$")
      ) {
        totalP += Number(r.total);
      }
    });
    alert(`You have spent \$${totalP.toFixed(2)}`);
  });
