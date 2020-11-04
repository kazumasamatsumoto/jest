function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 100);
}

function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 100);
  });
}

function fetchDataPromiseWithErrorMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 100);
  });
}

function fetchDataPromiseWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("error"));
    }, 100);
  });
}

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }

  fetchData(callback);
});

test("the data is peanut butter", () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe("peanut butter");
  });
});


