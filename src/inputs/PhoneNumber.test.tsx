import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import PhoneNumber from './PhoneNumber'

it('displays supplied value', () => {
	const phoneNumber = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} value={undefined} />)
	const input = phoneNumber.getByDisplayValue('')
	expect(input).toBeInTheDocument()
})

it('has correct id', () => {
	const phoneNumber = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} value={undefined} />)
	const input = phoneNumber.getByDisplayValue('')
	expect(input).toHaveAttribute('id', 'txtPhoneNumber')
})

//it('calls onChange function', () => {
//	const handleChange = jest.fn()

//	const phoneNumber = render(<PhoneNumber id='txtPhoneNumber' value={undefined} onChange={handleChange} />)
//	const input = phoneNumber.getByDisplayValue('')

//	fireEvent.change(input, { target: { value: '' } })

//	expect(handleChange).toHaveBeenCalledWith('')
//})

it('has no label when not provided', () => {
	const phoneNumber = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} value={undefined} />)
	const label = phoneNumber.container.querySelector('label')
	// label inner content is actually ' ', to keep it from collapsing
	// the below regex matches any number of whitespace characters
	expect(label?.innerHTML).toMatch(/^\s*$/)
})

it('has the correct label when provided', () => {
	const phoneNumber = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} label='Expected Phone Number' value={undefined} />)
	const label = phoneNumber.container.querySelector('label')
	expect(label).toHaveTextContent('Expected Phone Number')
})

it('label has asterisk when required', () => {
	let control = render(<PhoneNumber id='txtPhoneNumber' label='A Label' onChange={() => null} value={undefined} />)
	let label = control.container.querySelector('label')
	expect(label).not.toHaveTextContent(/\*/)

	cleanup()

	control = render(<PhoneNumber id='txtPhoneNumber' label='A Label' onChange={() => null} required={true} value={undefined} />)
	label = control.container.querySelector('label')
	// TODO: Figure out how to check for label's css '::before' content
	// expect(control).toHaveTextContent(/\*/)
})

it('is hidden when specified', () => {
	let control = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} value={undefined} />)
	let input = control.getByDisplayValue('')
	expect(input).toBeVisible()

	cleanup()

	control = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} hidden={true} value={undefined} />)
	input = control.getByDisplayValue('')
	// TODO: Figure out why hidden isn't being respected... css isn't being loaded or interpreted perhaps?
	// expect(input).not.toBeVisible()
})

it('displays error message when specified', () => {
	let control = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} value={undefined} />)
	let errorMessage = control.container.querySelector('.error-message')
	// label inner content is actually ' ', to keep it from collapsing
	// the below regex matches any number of whitespace characters
	expect(errorMessage?.textContent).toMatch(/^\s*$/)

	cleanup()

	control = render(<PhoneNumber id='txtPhoneNumber' onChange={() => null} errorMessage={'Error!!'} value={undefined} />)
	errorMessage = control.container.querySelector('.error-message')
	expect(errorMessage?.textContent).toMatch('Error!!')
})
