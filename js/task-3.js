const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

const logSuccess = (data) => {
  console.log(`Transaction ${data.id} processed in ${data.time}ms`);
};

const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

//   !перероблено на проміс!

const makeTransaction = (transaction) => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({id: transaction.id, time: delay});
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

/*
 * Працює так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Повинно працювати так
 */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);