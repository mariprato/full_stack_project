import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './PetInfo.css';
import pets from "../databases/petDatabase";
import Layout from "../components/layout/Layout";
import ButtonComponent from '../components/generic/ButtonComponent';

const PetInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activePage = searchParams.get('page') || 1;

  const pet = pets.find((pet) => pet.id === parseInt(id));

  useEffect(() => {
    sessionStorage.setItem('lastVisitedPage', activePage);
  }, [activePage]);

  return (
    <Layout>
      <div className="pet-info-layout">
        <h1>Details</h1>
        <div className="pet-info-container">
          <div className="pet-info-image-container">
            <img
              className="pet-info-image"
              src={`../images/${pet.id}.jpg`}
              alt={`${pet.name} the lost ${pet.type}.`}
            />
          </div>
          <div className="pet-info-details-container">
            <p>
              <span className="pet-info-details-keys">Pet's name: </span>
              <span className="pet-info-details-values">{pet.name}</span>
            </p>
            <p>
              <span className="pet-info-details-keys">Type of animal: </span>
              <span className="pet-info-details-values">{pet.type}</span>
            </p>
            <p>
              <span className="pet-info-details-keys">Pet Description: </span>
              <span className="pet-info-details-values">{pet.description}</span>
            </p>
            <p>
              <span className="pet-info-details-keys">Date and Location Lost: </span>
              <span className="pet-info-details-values">
                Lost on {pet.dateLastSeen} in the {pet.location} area.
              </span>
            </p>
            <p>
              <span className="pet-info-details-keys">Additional Details: </span>
              <span className="pet-info-details-values">{pet.additionalInformation}</span>
            </p>
          </div>
        </div>
        <Link to={`/lostPets?page=${sessionStorage.getItem('lastVisitedPage') || 1}`}>
          <ButtonComponent variant="button-return-to-pets">Return to All Pets</ButtonComponent>
        </Link>
      </div>
    </Layout>
  );
};

export default PetInfo;