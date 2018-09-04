import themes from './theme'
import React from 'react'

import './index.css'

export const ThemeContext = React.createContext(
  themes.dark // default value
)

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button
          {...props}
          style={{backgroundColor: theme.background}}
        />
      )}
    </ThemeContext.Consumer>
  )
}


function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

function Page(props) {
  return (
    <div className="Page">
      {props.children}
    </div>
  )
}

function Section(props) {
  return (
    <div className="Section">
      {props.children}
    </div>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }))
    }
  }

  render() {
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    )
  }
}