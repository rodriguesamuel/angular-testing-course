import {fakeAsync, flush, tick} from "@angular/core/testing";

fdescribe("Async Testing example", () => {
  it("async test example with jasmine done()", (done: DoneFn) => {

    let test = false;

    setTimeout(() => {
      console.log('running assertions');

      test = true;

      expect(test).toBeTruthy();

      done();
    }, 1000);

  });

  it("asynchronous test example - setTimeOut()", fakeAsync(() => {

    let test = false;

    setTimeout(()=>{});

    setTimeout(() => {
      console.log('running assertions timeOut()');

      test = true;

    }, 1000);

    //tick(1000);

    flush();

    expect(test).toBeTruthy();

  }));
});
