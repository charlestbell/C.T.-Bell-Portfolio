import React from 'react';

import dabblr from '../../images/dabblr.jpg';
import ctyFaktz from '../../images/ctyFaktz.jpg';
import marksmanJournal from '../../images/marksmanJournal.jpg';
import ramK9Training from '../../images/ramK9Training.jpg';
import characterTavern from '../../images/Character Tavern.jpg';

function Portfolio() {
  return (
    <div className="contentContainer shadow">
      <div className="row">
        <div className="col p-3 ">
          <h2 className="ms-4 mb-3 mt-6">Portfolio</h2>
        </div>
      </div>
      <div className="row">
        <div className="col p-4 d-flex flex-wrap justify-content-around">
          {/* Marksman Journal */}
          <div className="card mb-4" style={{ width: '23rem' }}>
            <img
              src={marksmanJournal}
              className="card-img-top"
              alt="ctyFaktz"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                Marksman Journal - iOs and Android Shooting Sports Tracker
              </h5>
              <p className="card-text">
                Perfect for competitive shooters that train PRS, 3P, 3 Gun,
                Archery, and beyond -- Anything that is benefited by training
                logs. Log your training, share it with your coach or training
                partner, and enter future training ideas for your time at the
                range or dry fire session. Features separate training history
                and gear load-outs for each sport you compete in.
              </p>
            </div>
            <div className="mb-4 mx-4">
              <a
                href="https://apps.apple.com/us/app/marksman-journal/id1613606007"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sharpsmountain.marksman_journal"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Android
              </a>
            </div>
          </div>
          {/* Ram K9 Training */}
          <div className="card mb-4" style={{ width: '23rem' }}>
            <img
              src={ramK9Training}
              className="card-img-top"
              alt="ctyFaktz"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                RAM K9 Training - iOs and Android Working Dog Tracker
              </h5>
              <p className="card-text">
                Track your training sessions over time to identify issues and
                solve problems. Includes a full catalog of training materials
                from the world's top K9 experts. From fundamentals of behavior
                building to advanced detection and protection drills. Each dog
                gets a gear page, where you can keep track of what gear belongs
                with which K9. The built-in checkboxes ensure you never leave
                gear behind. Identify issues. Train hard. Accomplish the
                mission. Ram K9 Training.
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://apps.apple.com/us/app/ram-k9-training/id1665674045"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                iOS
              </a>
              <a
                href="https://apps.apple.com/us/app/ram-k9-training/id1665674045"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Android
              </a>
            </div>
          </div>
          <div className="card mb-4" style={{ width: '23rem' }}>
            <img
              src={characterTavern}
              className="card-img-top"
              alt="ctyFaktz"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                Character Tavern - Interactive DND Character Creator
              </h5>
              <p className="card-text">
                Styled after rpg games from the 80s and 90s. Character Creator
                makes creating a DND character easy, intuitive and fun!
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://character-creator-tavern.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Hammonds526/CharacterCreator"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="card mb-4" style={{ width: '23rem' }}>
            <img src={dabblr} className="card-img-top" alt="ctyFaktz"></img>
            <div className="card-body">
              <h5 className="card-title">
                Dabblr - The best tutorials the world has to offer
              </h5>
              <p className="card-text">
                A social education platform that aggregates the best tutorials
                on every topic.
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://dabblr-tutorials.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Relten98/Dabblr"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card mb-4" style={{ width: '23rem' }}>
            <img src={ctyFaktz} className="card-img-top" alt="ctyFaktz"></img>
            <div className="card-body">
              <h5 className="card-title">ctyFaktz - City Research made fun!</h5>
              <p className="card-text">
                Find out fun facts about cities, compare cities together and
                have fun.
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://charlestbell.github.io/ctyFaktz/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/charlestbell/ctyFaktz"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
