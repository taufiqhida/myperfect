import React, {Component} from 'react'

import { connect } from 'react-redux';
import Header from 'parts/Header'
import Button from 'elements/Button';
import Stepper from 'elements/Stepper';
import Numbering from 'elements/Stepper/Numbering';
import Meta from 'elements/Stepper/Meta';
import MainContent from 'elements/Stepper/MainContent';
import Controller  from 'elements/Stepper/Controller';
import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';
import ItemDetails from "json/itemDetails.json";
import DetailsPage from './DetailsPage';





 class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const { checkout } = this.props;

    if (!checkout) return <div className='container'>
      <div className='row align-items-center justify-content-center text-center' style={{ height: "100vh" }}>
        <div className='col-3'>
          Pilih Kamar dulu
          <div>
            <Button className="btn mt-5" type="link" href="/" isLight>
              Back to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fiends below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: 'Payment',
        description: "Kindly follow the instruction below",
        content: (
          <Payment
            data={data}
            ItemDetails={ItemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yeay! Completed",
        description: null,
        content: <Completed />
      },
    }
      
    return (
      <>
        <Header isCentered />
        
        <Stepper steps={steps}>
          {
            (prevStep, nextStep, CurrentStep, steps) => (
              <>
                <Numbering
                  data={steps}
                  current={CurrentStep}
                  style={{ marginBottom: 50 }}
                />

                <Meta data={steps} current={CurrentStep} />

                <MainContent data={steps} current={CurrentStep} />
                {CurrentStep === "bookingInformation" && (
                  <Controller>
                    {data.firstName !== "" &&
                      data.lastName !== "" &&
                      data.email !== "" &&
                      data.phone !== "" && (
                        <div>
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            Continue To Booking
                          </Button>
                        </div>
                      )}
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isLight
                      href={`/properties/${ItemDetails._id}`}
                    >
                      Cencel Booking
                    </Button>
                  </Controller>
                )}

                {CurrentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankHolder !== "" && (
                        <div>
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            Continue to Booking
                          </Button>
                        </div>
                      )}
                    <Button
                      className="btn"
                      type="button"
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cencel Booking
                    </Button>
                  </Controller>
                )}
                  
{CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
              </>
            )}
        </Stepper>
      </>
    );
    }
}

const mapStateToProps = (state) =>({
  checkout: state.checkout,

})

export default connect(mapStateToProps)(Checkout)
