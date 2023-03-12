import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import React, { forwardRef } from 'react';
import Input from '@/modules/ui/Input';
import { StyledVoiceSearch, StyledMicroButton } from './styled';

interface IVoiceSearchProps {
  children?: React.ReactNode;
}

const VoiceSearch: React.FC = forwardRef<HTMLInputElement, IVoiceSearchProps>(
  (props, ref) => {
    const { listening, browserSupportsSpeechRecognition } =
      useSpeechRecognition();

    const hanldeButtonClick = () => {
      return listening
        ? SpeechRecognition.stopListening()
        : SpeechRecognition.startListening();
    };

    return (
      <StyledVoiceSearch>
        <Input
          type="text"
          placeholder="Search"
          iconLeft={`SearchOutlined`}
          ref={ref}
          padRight={60}
        />
        {browserSupportsSpeechRecognition && (
          <StyledMicroButton
            size={23}
            icon="KeyboardVoiceOutlined"
            onClick={hanldeButtonClick}
          />
        )}
      </StyledVoiceSearch>
    );
  },
);

VoiceSearch.displayName = `VoiceSearch`;

export default VoiceSearch;
