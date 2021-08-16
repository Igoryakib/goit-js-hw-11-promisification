const delay = ms => {
    // Твій код
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  // Виклич функції для перевірки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
  