import { Container, Content, CommitmentItem } from './styles';
import { Trophy, ShieldCheck, Truck, Headset } from '@phosphor-icons/react';

export const Commitment = () => {
  return (
    <Container>
      <Content>
        <CommitmentItem>
          <Trophy size={32} weight="light" />
          <div>
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </CommitmentItem>
        <CommitmentItem>
          <ShieldCheck size={32} weight="light" />
          <div>
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </CommitmentItem>
        <CommitmentItem>
          <Truck size={32} weight="light" />
          <div>
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </CommitmentItem>
        <CommitmentItem>
          <Headset size={32} weight="light" />
          <div>
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </CommitmentItem>
      </Content>
    </Container>
  );
};
