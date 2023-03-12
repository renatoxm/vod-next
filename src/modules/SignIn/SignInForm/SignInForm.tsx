import { useStore } from '@/lib/providers/GlobalStoreProvider';
import Button from '@/modules/ui/Button';
import Checkbox from '@/modules/ui/Checkbox';
import InputWithLabel from '@/modules/ui/InputWithLabel';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface ISignInFormProps {
  children?: React.ReactNode;
}

const SignInForm: React.FC<ISignInFormProps> = (props) => {
  const { authStore } = useStore();
  const router = useRouter();

  const { user, signIn } = authStore;

  useEffect(() => {
    if (user !== null) {
      const referer = router.query.referer?.toString();
      router.push(referer ?? `/`);
    }
  }, [user, router]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Email or phone"
        type={`email`}
        value={`johndoe@example.com`}
      />
      <Spacer vertical={39} />
      <InputWithLabel
        label="Enter Your password"
        type={`password`}
        value={`iamjohndoe`}
      />
      <Spacer vertical={13} />
      <Row justify="space-between">
        <Checkbox label="Remember me" />
        <Button title="Not Implemented" theme="text">
          Forgot password?
        </Button>
      </Row>
      <Spacer vertical={48} />
      <Button
        fontSize={17}
        style={{
          width: `100%`,
        }}
      >
        Sign In
      </Button>
    </form>
  );
};

export default observer(SignInForm);
