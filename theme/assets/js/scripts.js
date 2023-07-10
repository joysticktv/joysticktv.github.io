tailwind.config = {
	darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
    },
  },
};

window.onload = function() {
  const navToggleButton = document.getElementById('navToggleButton');
  navToggleButton.addEventListener('click', toggleNavigation);

  const themeToggleButton = document.getElementById('themeToggleButton');
  themeToggleButton.addEventListener('click', toggleColorTheme);

  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions);
  window.addEventListener('storage', updateModeWithoutTransitions);

  const siteSearchButtons = document.querySelectorAll('button.searchButton');
  for(let i = 0; i < siteSearchButtons.length; i++) {
    siteSearchButtons[i].addEventListener('click', openSearchModal);
  }

  const modal = document.querySelector("div[role='dialog']");

  document.querySelector("#modalbg").addEventListener('click', function(e) {
    if (e.target === this) {
      modal.classList.add('hidden');
    }
  });

  setColorTheme();
  hljs.highlightAll();

  const searchClient = algoliasearch(
    'YXM67SR4Z2',
    '9f037e1b9d62a35220f41333b4e64377'
  );

  autocomplete({
    container: '#autocomplete',
    placeholder: 'Find helpful information...',
    insights: true,
    getSources({ query }) {
      return [
        {
          sourceId: 'info',
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'joystick_support',
                  query,
                  params: {
                    hitsPerPage: 5,
                    attributesToSnippet: ['title:10', 'content:35'],
                    snippetEllipsisText: '…',
                  },
                },
              ],
            });
          },
          templates: {
            noResults() {
              return "No results";
            },
            item({ item, components, html }) {
              return html`<a class="cursor-pointer block hover:bg-emerald-500 hover:text-white" href="${item.url}">
                <div class="flex flex-col p-1">
                  <div class="text-lg mb-1">
                    ${components.Highlight({
                      hit: item,
                      attribute: 'title',
                    })}
                  </div>
                  <div class="">
                    ${components.Snippet({
                      hit: item,
                      attribute: 'content',
                    })}
                  </div>
                </div>
              </a>`;
            },
          },
        },
      ];
    },
  });

  function setColorTheme() {
    const prefersDark = window.localStorage.darkTheme === 'true' || darkModeMediaQuery.matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('darkTheme', prefersDark);
  }

  function toggleColorTheme() {
    document.documentElement.classList.toggle('dark');
    window.localStorage.setItem('darkTheme', window.localStorage.darkTheme !== 'true');
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily();
    toggleColorTheme();
  }

  function toggleNavigation() {
    for (const child of this.children) {
      child.classList.toggle('visible');
      child.classList.toggle('hidden');
    }
    document.querySelector("[data-target='nav']").classList.toggle('hidden');
  }

  function openSearchModal() {
    modal.classList.remove('hidden');
  }
}
