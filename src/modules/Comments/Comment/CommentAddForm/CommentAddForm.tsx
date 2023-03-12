import { useSignIn } from '@/lib/hooks/useSignInPush';
import { useVideoId } from '@/lib/hooks/useVideoId';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { FromTabletOnly, MobileOnly } from '@/modules/ui/MediaQuery';
import { observer } from 'mobx-react-lite';
import React, { useRef, useState } from 'react';
import Avatar from '../../../ui/Avatar';
import Button from '../../../ui/Button';
import IconWrapper from '../../../ui/IconWrapper';
import { StyledCommentForm, StyledCommentInput } from './styled';

interface ICommentAddFormProps {
  children?: React.ReactNode;
  parentId?: string;
  onSubmit?: VoidFunction;
}

const CommentAddForm: React.FC<ICommentAddFormProps> = ({
  parentId,
  onSubmit,
}) => {
  const { push } = useSignIn();
  const [text, setText] = useState(``);
  const {
    commentsStore,
    authStore: { user },
  } = useStore();

  const defaultValue = useRef(text);
  const inputRef = useRef<HTMLSpanElement>(null);

  const videoId = useVideoId();

  const handleInput: React.FormEventHandler<HTMLSpanElement> = (e) => {
    setText(e.currentTarget.innerHTML);
  };

  const handlePaste: React.ClipboardEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData(`text/plain`);
    const range = document.getSelection()!.getRangeAt(0)!;
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);

    const selection = window.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
    setText(e.currentTarget.innerHTML);
  };

  const handleFocus: React.FocusEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    if (!user) {
      push();
    }
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const hasText = !!text.replace(
      /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
      ``,
    );
    if (!hasText) return;

    const commentText = text
      .replace(/<div>/gi, `<br>`)
      .replace(/<\/div>/gi, ``);

    if (parentId) {
      commentsStore.addComment(commentText, videoId, parentId);
    } else {
      commentsStore.addCommentThread(commentText, videoId);
    }
    setText(``);
    defaultValue.current = ``;
    if (inputRef.current) inputRef.current.innerHTML = ``;
    if (onSubmit) onSubmit();
  };

  const isSignedIn = !!user;

  return (
    <StyledCommentForm data-testid="comment-form" onSubmit={handleFormSubmit}>
      {isSignedIn && <Avatar name={user.authorDisplayName} size={34} />}
      <StyledCommentInput
        ref={inputRef}
        role="textbox"
        contentEditable
        data-placeholder={
          isSignedIn
            ? `Commenting as ${user.authorDisplayName}`
            : `Add a comment`
        }
        onInput={handleInput}
        onPaste={handlePaste}
        onFocus={handleFocus}
        dangerouslySetInnerHTML={{ __html: defaultValue.current }}
      />
      <Button type="submit" fontSize={12} theme="secondary">
        <MobileOnly as="span">
          <IconWrapper size={17} icon="Send" />
        </MobileOnly>
        <FromTabletOnly as="span">COMMENT</FromTabletOnly>
      </Button>
    </StyledCommentForm>
  );
};

export default observer(CommentAddForm);
