import QNAComponent from './QNA';
import data from './mockData.json';

export default {
  title: 'Components/Result/QNA',
  component: QNAComponent,
};

const Template = args => <QNAComponent {...args} />;
export const QNA = Template.bind({});

QNA.args = {
  questionsAndAnswers: data,
};
