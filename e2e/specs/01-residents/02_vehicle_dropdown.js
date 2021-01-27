const Base = require('../../pageobjects/Home');
const homeSelectors = require('../../selectors/home');
const residentsSelectors = require('../../selectors/residents');

describe('Planet resident path', () => {
    let updatedVehicle = '';
    
    before('setup', () => {
        Base.open();
        
    });

    it('should access to the tatooine resident cards', () => {

        $(homeSelectors.tatooineResidentsButton).click();
        $(residentsSelectors.dropdownOption).waitForDisplayed({timeout: 15000});

        expect($(homeSelectors.residentsModal)).toBeDisplayed()
    });

    it('should click in the anakin dropdown, select the second option and check it', () => {
        const dropdownOption = $(residentsSelectors.dropdownOption);
        const dropdown = dropdownOption.$('..');
        const originalVehicle = dropdown.getValue();

        dropdown.click();
        dropdown.selectByIndex(1);
        updatedVehicle = dropdown.getValue();

        expect(originalVehicle).not.toEqual(updatedVehicle);
    });

    it('should close the tatooine resident modal', () => {
        $(homeSelectors.residentsModalCloseButton).click();
        
        expect($(homeSelectors.residentsModal)).not.toBeDisplayed();
    });

    it('should check that the dropdown has the vehicle updated', () => {

        $(homeSelectors.tatooineResidentsButton).click();
        $(residentsSelectors.dropdownOption).waitForDisplayed({ timeout: 15000});

        const dropdownOption = $(residentsSelectors.dropdownOption);
        const dropdown = dropdownOption.$('..');
        const vehicle = dropdown.getValue();

        expect(updatedVehicle).toEqual(vehicle);
    });
});
