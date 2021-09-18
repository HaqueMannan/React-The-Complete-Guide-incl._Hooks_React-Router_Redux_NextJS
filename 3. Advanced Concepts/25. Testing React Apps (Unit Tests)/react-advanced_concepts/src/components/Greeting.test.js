import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
   test('renders "Hello World!" as a text', () => {
      // Arrange
      render(<Greeting />);

      // Act
      // ... nothing

      // Assert
      const helloWorldElement = screen.getByText('Hello World!');
      expect(helloWorldElement).toBeInTheDocument();
   });

   test('renders "It is nice to see you!" if the button was NOT clicked', () => {
      // Arrange
      render(<Greeting />);
      // Assert
      const outputElement = screen.getByText('It is nice to', { exact: false });
      expect(outputElement).toBeInTheDocument();
   });

   test('renders "Changed!" if the button was clicked', () => {
      // Arrange
      render(<Greeting />);

      // Act
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);

      // Assert
      const outputElement = screen.getByText('Changed!');
      expect(outputElement).toBeInTheDocument();
   });

   test('does not render "It is nice to see you!" if the button was clicked', () => {
      // Arrange
      render(<Greeting />);

      // Act
      const buttonElement = screen.getByText('It is nice to', { exact: false });
      userEvent.click(buttonElement);

      // Assert
      const outputElement = screen.queryByText('It is nice to!', { exact: false });
      expect(outputElement).toBeNull();
   });
});