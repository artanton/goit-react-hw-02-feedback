import { OptionList } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList>
    {options.map(({ name, value }) => (
      <li key={name}>
        <button value={value} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      </li>
    ))}
  </OptionList>
);

// export const FeedbackOptions=()=>
// {<div>
// <ul>
// <li>
//   <button value={good} onClick={this.updateGood}>Good</button>
// </li>
// <li>
//   <button value={neutral} onClick={this.updateNeutral}>Neutral</button>
// </li>
// <li>
//   <button value={bad} onClick={this.updateBad}>Bad</button>
// </li>
// </ul>
// </div>}
