import { pokemonApi } from 'api';

import { Wrapper, Counter } from 'components';

export const App = () => {
  const { data, error, isLoading } = pokemonApi.useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      <Wrapper>
        <h4>
          Example of using store with sagas (see sources)
        </h4>
      </Wrapper>

      <Wrapper>
        <h1>
          Counter
        </h1>

        <Counter />
      </Wrapper>

      <Wrapper>
        <h4>
          Example of using RTK query (see sources)
        </h4>
      </Wrapper>

      <Wrapper>
        {isLoading && (
          <div>
            loading...
          </div>
        )}

        {error && (
          <div>
            Oh no, there was an error
          </div>
        )}

        {data && (
          <h3>
            {data.name}
          </h3>
        )}
      </Wrapper>
    </div>
  );
};
