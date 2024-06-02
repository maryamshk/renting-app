import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';



const Seller = () => {
  const [shopName, setShopName] = useState('');
  const [categories, setCategories] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [step, setStep] = useState(1);
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPricePerDay, setProductPricePerDay] = useState('');
  const [isProductValid, setIsProductValid] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    cnic: '',
    address: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    bankName: '',
    bsbCode: '',
    accountNumber: ''
  });

  const validateShopName = (name) => {
    const isValidLength = name.length >= 4 && name.length <= 20;
    const isValidCharacters = /^[a-zA-Z0-9]*$/.test(name);
    return isValidLength && isValidCharacters;
  };

  const handleChange = (e) => {
    const name = e.target.value;
    setShopName(name);
    setIsValid(validateShopName(name));
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategories((prevCategories) =>
      prevCategories.includes(selectedCategory)
        ? prevCategories.filter((cat) => cat !== selectedCategory)
        : [...prevCategories, selectedCategory]
    );
  };

  const handleProductChange = () => {
    const isValidProductName = productName.length >= 3;
    const isValidProductImage = /\.(jpeg|jpg|png|gif)$/i.test(productImage);
    const isValidProductDescription = productDescription.length > 0;
    const isValidProductPrice = !isNaN(productPricePerDay) && productPricePerDay > 0;

    setIsProductValid(isValidProductName && isValidProductImage && isValidProductDescription && isValidProductPrice);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (step === 1 && isValid) {
      setStep(2);
    } else if (step === 2 && categories.length > 0) {
      setStep(3);
    } else if (step === 3 && isProductValid) {
      setStep(4);
    } else if (step === 4 && personalInfo.name && personalInfo.cnic && personalInfo.address) {
      setStep(5);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const allCategories = [
    'Equipment and Tools',
    'Transportation',
    'Event and Party Supplies',
    'Recreation and Leisure',
    'Home and Lifestyle',
    'Fashion and Accessories',
    'Specialty Items',
    'Land and Property Area'
  ];

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <RightPane>
          <Form>
            <Logo>
              <LogoImage src="../ecomlogo.png" alt="Logo" />
              <Heading>RentEase</Heading>
            </Logo>

            <ProgressBar>
              <ProgressStep className={step >= 1 ? "completed" : ""}></ProgressStep>
              <ProgressStep className={step >= 2 ? "completed" : ""}></ProgressStep>
              <ProgressStep className={step >= 3 ? "completed" : ""}></ProgressStep>
              <ProgressStep className={step >= 4 ? "completed" : ""}></ProgressStep>
              <ProgressStep className={step >= 5 ? "completed" : ""}></ProgressStep>
            </ProgressBar>
            {step === 1 && (
              <>
                <h2>Step 1: Name of your shop</h2>
                <Label htmlFor="shopName">Name of your shop</Label>
                <InputContainer>
                  <Input
                    type="text"
                    id="shopName"
                    value={shopName}
                    onChange={handleChange}
                    placeholder="shop name"
                  />
                  <Domain>.fenzy.store</Domain>
                  {isValid && <ValidCheck>✔️</ValidCheck>}
                </InputContainer>
                <ValidationRules>
                  <p style={shopName.length >= 4 && shopName.length <= 20 ? { color: '#4caf50' } : { color: '#f44336' }}>
                    Between 4-20 characters
                  </p>
                  <p style={/^[a-zA-Z0-9]*$/.test(shopName) ? { color: '#4caf50' } : { color: '#f44336' }}>
                    No special characters, spaces, or accented letters
                  </p>
                </ValidationRules>
                <Button className={!isValid ? 'disabled' : ''} disabled={!isValid} onClick={handleNextStep}>
                  Save and Continue
                </Button>
                <InfoText>You can always change your shop name in settings</InfoText>
              </>
            )}
            {step === 2 && (
              <>
                <h2>Step 2: What do you sell?</h2>
                <Label>What do you sell?</Label>
                <CategoryContainer>
                  {allCategories.map((cat) => (
                    <CategoryButton
                      key={cat}
                      selected={categories.includes(cat)}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      {cat}
                    </CategoryButton>
                  ))}
                </CategoryContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <Button onClick={handlePreviousStep}>
                    Back
                  </Button>
                  <Button onClick={handleNextStep} style={{ marginLeft: '10px' }}>
                    Save and Continue
                  </Button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2>Step 3: Product Details</h2>
                <Label>Product Details</Label>
                <InputContainer>
                  <Input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Product Name"
                    onBlur={handleProductChange}
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="text"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                    placeholder="Product Image URL"
                    onBlur={handleProductChange}
                  />
                </InputContainer>
                <InputContainer>
                  <TextArea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Product Description"
                    onBlur={handleProductChange}
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="number"
                    value={productPricePerDay}
                    onChange={(e) => setProductPricePerDay(e.target.value)}
                    placeholder="Price Per Day"
                    onBlur={handleProductChange}
                  />
                </InputContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <Button onClick={handlePreviousStep}>
                    Back
                  </Button>
                  <Button className={!isProductValid ? 'disabled' : ''} disabled={!isProductValid} onClick={handleNextStep}>
                    Save and Continue
                  </Button>
                </div>
              </>
            )}
            {step === 4 && (
              <>
                <h2>Step 4: Personal Information</h2>
                <Label>Personal Information</Label>
                <InputContainer>
                  <Input
                    type="text"
                    name="name"
                    value={personalInfo.name}
                    onChange={handlePersonalInfoChange}
                    placeholder="Full Name"
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="text"
                    name="cnic"
                    value={personalInfo.cnic}
                    onChange={handlePersonalInfoChange}
                    placeholder="CNIC"
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="text"
                    name="address"
                    value={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                    placeholder="Address"
                  />
                </InputContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <Button onClick={handlePreviousStep}>
                    Back
                  </Button>
                  <Button onClick={handleNextStep}>
                    Save and Continue
                  </Button>
                </div>
              </>
            )}
            {step === 5 && (
              <>
                <h2>Step 5: Payment Information</h2>
                <Label>Payment Information</Label>
                <InputContainer>
                  <Input
                    type="text"
                    name="bankName"
                    value={paymentInfo.bankName}
                    onChange={handlePaymentInfoChange}
                    placeholder="Bank Name"
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="text"
                    name="bsbCode"
                    value={paymentInfo.bsbCode}
                    onChange={handlePaymentInfoChange}
                    placeholder="BSB Code"
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="text"
                    name="accountNumber"
                    value={paymentInfo.accountNumber}
                    onChange={handlePaymentInfoChange}
                    placeholder="Account Number"
                  />
                </InputContainer>
                <Button onClick={() => alert('Account created successfully!')}>
                  Save and Continue
                </Button>
              </>
            )}
            {step === 6 && (
              <>
                <h2>Account Successfully Created!</h2>
                <p>Your account has been created successfully. You can now start using RentEase.</p>
              </>
            )}
          </Form>
        </RightPane>
      </Container></>

  );
};

export default Seller;


const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  font-family: 'Roboto', sans-serif;
  padding: 20px;
`;

const RightPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
`;

const Form = styled.div`
  width: 100%;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const ProgressStep = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 50%;
  &.completed {
    background-color: #4caf50;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const Domain = styled.span`
  margin-left: -10px;
  font-size: 0.9em;
  color: #ffffff;
`;

const ValidCheck = styled.span`
  color: #4caf50;
  margin-left: 10px;
`;

const ValidationRules = styled.div`
  margin: 10px 0;
  font-size: 1.2em;
`;

const Label = styled.label`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
`;

const Button = styled.button`
  background-color: #6a1b9a;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  &.disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const InfoText = styled.p`
  margin-top: 10px;
  font-size: 0.9em;
  color: #ffffff;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-style: normal;
`;

const Logo = styled.div`
  font-size: 10rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 1rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryButton = styled.button`
  background-color: ${(props) => (props.selected ? '#6a1b9a' : '#f1f1f1')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #6a1b9a;
    color: #fff;
  }
`;