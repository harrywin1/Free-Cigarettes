import React, { useState } from 'react';
import styled from 'styled-components';
import PlacesAutocomplete from 'react-google-places-autocomplete';



const FormContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #ff4081;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 10px;
  color: #333;

  &:last-child {
    margin-right: 0;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff4081;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
`;


function Form({ onGetFreeNasha }) {
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [salary, setSalary] = useState('');
  const [education, setEducation] = useState('');
  const [Residence, setResidence] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetFreeNasha();
  };

  return (
    <FormContainer>
      <FormTitle>How much free cigarettes are you worth?</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Label>
            Age:
            <Select value={age} onChange={(e) => setAge(e.target.value)} required>
              <option value="">Select</option>
              <option value="18-24 years">18-24 years</option>
              <option value="25-30 years">25-30 years</option>
              <option value="31-35 years">31-35 years</option>
              <option value="36-40 years">36-40 years</option>
            </Select>
          </Label>
          <Label>
            Profession:
            <Select value={profession} onChange={(e) => setProfession(e.target.value)} required>
              <option value="">Select</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Investment Banker">Investment Banker</option>
              <option value="Brand Manager">Brand Manager</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Content Creator">Content Creator</option>
              <option value="Other">Other</option>
            </Select>
          </Label>
        </FormRow>
        <FormRow>
          <Label>
            Monthly Salary:
            <Select value={salary} onChange={(e) => setSalary(e.target.value)} required>
              <option value="">Select</option>
              <option value="Less than 50000">Less than 50000</option>
              <option value="50000-1 lakh">50000-1 lakh</option>
              <option value="1-2 lakh">1-2 lakh</option>
              <option value="2-5 lakh">2-5 lakh</option>
              <option value="More than 5 lakh">More than 5 lakh</option>
            </Select>
          </Label>
          <Label>
            Education:
            <Select value={education} onChange={(e) => setEducation(e.target.value)} required>
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
              <option value="PhD">PhD</option>
              <option value="Dropout">Dropout</option>
            </Select>
          </Label>
        </FormRow>
        <FormRow>
          <Label>
            Residence
          <Select value={Residence} onChange={(e) => setResidence(e.target.value)} required>
              <option value="">Select</option>
              <option value="Parent's house">Parent's house</option>
              <option value="Self-owned">Self-owned</option>
              <option value="Rentale">Rental</option>
            </Select>
          </Label>
          <Label>
            Country:
            <Select value={country} onChange={(e) => setCountry(e.target.value)} required>
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="Abroad">Abroad</option>
            </Select>
          </Label>
        </FormRow>
        <Button type="submit">Get Free Ciggrates</Button>
      </form>
    </FormContainer>
  );
}

export default Form;
