
describe("The bill with settings factory function", function () {

    it("should be able set the call cost", function () {
        let settingBill = billWithSettings();
        settingBill.setCriticalLevel(10);
        settingBill.setCallCost(1.85);
        assert.equal(1.85, settingBill.getCallCost());

        let settingBill2 = billWithSettings();
        settingBill2.setCallCost(2.75);
        assert.equal(2.75, settingBill2.getCallCost());

    });


    it("should be able set the sms cost", function () {
        let settingBill = billWithSettings();
        settingBill.setSmsCost(0.85);
        assert.equal(0.85, settingBill.getSmsCost());

        let settingBill2 = billWithSettings();
        settingBill2.setSmsCost(0.75);
        assert.equal(0.75, settingBill2.getSmsCost());

    });

    it("should be able set the sms and call cost", function () {
        let settingBill = billWithSettings();
        settingBill.setCriticalLevel(10);
        settingBill.setCallCost(2.75);
        settingBill.setSmsCost(0.85);

        assert.equal(2.75, settingBill.getCallCost());
        assert.equal(0.85, settingBill.getSmsCost());


    });

    it("should be able set the warning level", function () {
        let settingBill = billWithSettings();
        settingBill.setWarningLevel(20);


        assert.equal(20, settingBill.getWarningLevel());

    });


    it("should be able set the  critical level", function () {
        let settingBill = billWithSettings();
        settingBill.setCriticalLevel(30);


        assert.equal(30, settingBill.getCriticalLevel());

    });

    it("should be able set the warning level & critical level", function () {
        let settingBill = billWithSettings();
        settingBill.setWarningLevel(20);
        settingBill.setCriticalLevel(30);

        assert.equal(20, settingBill.getWarningLevel());
        assert.equal(30, settingBill.getCriticalLevel());

    });

    //now we need to set the price / using the price & setting totals

    describe("use values", function () {

        it("should be able to use the call cost set ", function () {
            let settingBill = billWithSettings();
            settingBill.setCriticalLevel(10);
            settingBill.setWarningLevel(5)
            settingBill.setCallCost(2.25);
            settingBill.setSmsCost(0.85);

            // make three calls

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            //settingBill.makeCall();
            //settingBill.makeCall();
            //settingBill.makeCall();
            //settingBill.makeCall();
            //console.log(settingBill.getTotalCallCost());

            assert.equal(6.75, settingBill.getTotalCost());
            assert.equal(6.75, settingBill.getTotalCallCost());
            assert.equal(0.00, settingBill.getTotalSmsCost());

        });

        it("should be able to use the call cost set  for 2 call at 1.35 each", function () {
            let settingBill = billWithSettings();
            settingBill.setCriticalLevel(10);
            settingBill.setCallCost(1.35);
            settingBill.setSmsCost(0.85);

            // make two calls

            settingBill.makeCall();
            settingBill.makeCall();


            assert.equal(2.70, settingBill.getTotalCost());
            assert.equal(2.70, settingBill.getTotalCallCost());
            assert.equal(0.00, settingBill.getTotalSmsCost());

        });
        //testing for sms as well

        it("should be able to use the call cost send 2 sms's at 0.85 each", function () {
            let settingBill = billWithSettings();
            settingBill.setCriticalLevel(10);
            settingBill.setCallCost(1.35);
            settingBill.setSmsCost(0.85);

            // send 2 smses

            settingBill.sendSms();
            settingBill.sendSms();


            assert.equal(1.70, settingBill.getTotalCost());
            assert.equal(0.00, settingBill.getTotalCallCost());
            assert.equal(1.70, settingBill.getTotalSmsCost());

        });


        it("should be able to use the call cost send 2 sms's at 0.85 each & make 1 call at 1.35", function () {
            let settingBill = billWithSettings();
            settingBill.setCriticalLevel(30);
            settingBill.setCallCost(1.35);
            settingBill.setSmsCost(0.85);

            // send 2 smses and 1 call

            settingBill.makeCall();
            settingBill.sendSms();
            settingBill.sendSms();

            assert.equal(3.05, settingBill.getTotalCost());
            assert.equal(1.35, settingBill.getTotalCallCost());
            assert.equal(1.70, settingBill.getTotalSmsCost());

        });
        //warning and critical level unit testing

        describe("warning & critical level", function () {

            it("should return a class name of warning, if warning level is reached ", function () {
                let settingBill = billWithSettings();
                settingBill.setWarningLevel(5);
                 settingBill.setCriticalLevel(10);
                settingBill.setCallCost(1.35);
                settingBill.setSmsCost(0.85);


                // make 4 calls

                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();

                assert.equal("warning", settingBill.totalClassName());



            });

            //another test for critical level

            it("should return a class name of critical, if critical level is reached ", function () {
                let settingBill = billWithSettings();
                settingBill.setWarningLevel(5);
                settingBill.setCriticalLevel(10);
                settingBill.setCallCost(2.50);
                settingBill.setSmsCost(0.85);


                // make 4 calls

                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();

                assert.equal("critical", settingBill.totalClassName());



            });
            //stopping total from adding once critical level is reached

            it("should stop the total call cost from increasing when critical level reach ", function () {
                let settingBill = billWithSettings();

                settingBill.setCallCost(2.50);
                settingBill.setSmsCost(0.85);
                settingBill.setWarningLevel(5);
                settingBill.setCriticalLevel(10);


                // make 5 calls

                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();

                assert.equal("critical", settingBill.totalClassName());
                assert.equal("12.5", settingBill.getTotalCallCost());



            });
            // setthe citical level to new value and see if it icreased new instance

            it("should allow the total increase after the critical level & upping the critical level", function () {
                let settingBill = billWithSettings();
                settingBill.setWarningLevel(8);
                settingBill.setCriticalLevel(10);

                settingBill.setCallCost(2.50);
                settingBill.setSmsCost(0.85);

                // make 5 calls

                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();


                assert.equal("critical", settingBill.totalClassName());
                assert.equal(12.5, settingBill.getTotalCallCost());

                //now change or up it to 20

                settingBill.setCriticalLevel(20);

                assert.equal("warning", settingBill.totalClassName());

                //make 2 more calls
                settingBill.makeCall();
                settingBill.makeCall()




                assert.equal(17.5, settingBill.getTotalCallCost());



            });

        });
    });


























});