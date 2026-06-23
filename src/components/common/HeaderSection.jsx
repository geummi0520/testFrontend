import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoCaretDown } from "react-icons/io5";

const orders = ["리스트", "보드", "갤러리", "피드"];

export default function HeaderSection({ filter, setFilter }) {
  const navigate = useNavigate();

  const [showOrders, setShowOrders] = useState(false);

  const onClickOrder = () => {
    setShowOrders(!showOrders);
  };

  return (
    <HeaderSectionWrapepr>
      <div>
        <div className="title">블로그</div>
        <div className="order" onClick={onClickOrder}>
          <CurrentFilter>{filter}</CurrentFilter>

          <CaretIcon $showOrders={showOrders} />

          {showOrders && (
            <OrderList className="orders">
              {orders.map((order) => (
                <div
                  key={order}
                  className="order-item"
                  onClick={() => setFilter(order)}
                >
                  {order}
                </div>
              ))}
            </OrderList>
          )}
        </div>
      </div>
    </HeaderSectionWrapepr>
  );
}
const CurrentFilter = styled.span``;

const HeaderSectionWrapepr = styled.section`
  width: 100%;
  max-width: 74.4rem;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .title {
      color: var(--text-primary, #171719);

      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -0.024rem;
    }

    .order {
      position: relative;
      border-radius: 0.8rem;
      border: 1px solid var(--line-secondary, rgba(112, 115, 124, 0.16));
      display: flex;
      gap: 0.4rem;
      padding: 0.6rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      //text
      color: var(--icon-primary, #171719);
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 500;
      line-height: 138.5%; /* 18.005px */
      letter-spacing: 0.252px;
    }
  }
`;

const OrderList = styled.div`
  width: 100%;
  position: absolute;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  left: 0;
  top: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--line-secondary, rgba(112, 115, 124, 0.16));
  background-color: white;
`;

const CaretIcon = styled(IoCaretDown)`
  font-size: 1.2rem;
  transition: transform 0.2s ease;
  transform: rotate(${({ $showOrders }) => ($showOrders ? "180deg" : "0deg")});
`;
