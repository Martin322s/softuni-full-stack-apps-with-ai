function reverseString(s: string): string {
    return s.split('').reverse().join('');
}

const inputElement = document.getElementById('text-input') as HTMLInputElement | null;
const resultElement = document.getElementById('result') as HTMLParagraphElement | null;

function showReversedString(): void {
    if (!inputElement || !resultElement) {
        return;
    }

    const userInput = inputElement.value;
    resultElement.textContent = `Reversed text: ${reverseString(userInput)}`;
}

if (inputElement) {
    inputElement.addEventListener('input', showReversedString);
}
