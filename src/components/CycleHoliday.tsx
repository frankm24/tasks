import React, { CSSProperties, useState } from "react";
import { Button } from "react-bootstrap";

type HolidayType =
    | "Thanksgiving"
    | "New Year's Day"
    | "Martin Luther King Jr. Day"
    | "Presidents' Day"
    | "Memorial Day";

const nextHolidayInAlphabet: Record<HolidayType, HolidayType> = {
    "New Year's Day": "Martin Luther King Jr. Day",
    "Martin Luther King Jr. Day": "Memorial Day",
    "Memorial Day": "Presidents' Day",
    "Presidents' Day": "Thanksgiving",
    Thanksgiving: "New Year's Day",
};

const nextHolidayByDate: Record<HolidayType, HolidayType> = {
    "New Year's Day": "Martin Luther King Jr. Day",
    "Martin Luther King Jr. Day": "Presidents' Day",
    "Presidents' Day": "Memorial Day",
    "Memorial Day": "Thanksgiving",
    Thanksgiving: "New Year's Day",
};

const holidayEmoji: Record<HolidayType, string> = {
    "New Year's Day": "⏰",
    "Martin Luther King Jr. Day": "⚖️",
    "Memorial Day": "🎖️",
    "Presidents' Day": "🎩",
    Thanksgiving: "🦃",
};

const buttonStyle: CSSProperties = {
    width: "15vw",
    marginTop: "10px",
    marginBottom: "10px",
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<HolidayType>("New Year's Day");

    function advanceByAlphabet() {
        setCurrentHoliday(nextHolidayInAlphabet[currentHoliday]);
    }

    function advanceByDate() {
        setCurrentHoliday(nextHolidayByDate[currentHoliday]);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            Cycle Holiday
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100vw",
                    gap: "20px",
                }}
            >
                <Button onClick={advanceByAlphabet} style={buttonStyle}>
                    Advance by Alphabet
                </Button>
                <Button onClick={advanceByDate} style={buttonStyle}>
                    Advance by Year
                </Button>
            </div>
            <span>{`Holiday: ${holidayEmoji[currentHoliday]}`}</span>
        </div>
    );
}
