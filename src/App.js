import React from "react";
import {StoreProvider} from "./store";

import PageSection from "./components/PageSection/PageSection";
import Player from "./components/Player/Player";
import PlayerInputField from "./components/Player/PlayerInputField";
import HistoryModal from "./components/History/HistoryModal";
import Greeting from "./components/Greeting/Greeting";

export default () => {
  return  (
    <StoreProvider>
      <PageSection title="CDN online player">
        <Player />
        <PlayerInputField/>
        <footer>
          You can see <HistoryModal/>.
        </footer>
      </PageSection>
      <Greeting />
    </StoreProvider>
  );
};
