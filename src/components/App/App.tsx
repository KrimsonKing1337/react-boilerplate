import { Wrapper, Counter } from 'components';

export const App = () => {
  return (
    <div>
      <Wrapper>
        <h1>
          Counter
        </h1>

        <Counter />
      </Wrapper>

      <Wrapper>
        <h4>
          Example of using store with sagas (see sources)
        </h4>
      </Wrapper>
    </div>
  );
};
