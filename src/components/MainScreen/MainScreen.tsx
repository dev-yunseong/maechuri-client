import React from 'react';
import './MainScreen.css';

interface MainScreenProps {
  onStartGame: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ onStartGame }) => {
  return (
    <div className="main-screen">
      <h1>매추리 게임</h1>
      <div className="main-content">
        <h2>요리사 3인방의 사건 현장</h2>
        <button className="start-game-button" onClick={onStartGame}>
          오늘의 게임 시작
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
