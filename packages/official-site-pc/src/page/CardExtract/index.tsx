import React from "react";
import CardList from "./CardList";
import CardDetail from "./CardDetail";
import { CardContext } from "./common";
import './CardExtractPage.scss'

const ExtractCard: React.FC = () => {
  const [currentCardId, setCurrentCardId] = React.useState<string>('');
  return (
    <CardContext.Provider value={currentCardId}>
      <div className="card-extract-page">
        <CardList onSelect={() => setCurrentCardId} />
        <CardDetail />
      </div>
    </CardContext.Provider>
  );
};

export default ExtractCard;
