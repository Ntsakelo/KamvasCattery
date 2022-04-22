describe ('test bookings function',function(){
    it("This booking should 'cost: R45 * 3 = R135.00' and the function should return that if called with this parameter.",function(){
        assert.equal(135,bookingCost({check_in_day: 'Monday',duration: 3, cat_name : 'Snowy'
          }))
    })
    it("This booking should 'cost: R45 * 3 = R135.00 * 0.75 = 101.25' and the function should return that if called with this parameter.",function(){
        assert.equal(101.25,bookingCost({check_in_day: 'Wednesday',duration: 3, cat_name : 'Snowy'
          }))
    })
    it("This booking should 'cost: R45 * 3 = R135.00 * 0.85 = 114.75' and the function should return that if called with this parameter.",function(){
        assert.equal(114.75,bookingCost({check_in_day: 'Friday',duration: 3, cat_name : 'Snowy'
          }))
    })

})
