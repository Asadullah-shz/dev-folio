import React from 'react';
import { Divider, Dropdown, Space, theme } from "antd";

const { useToken } = theme;

const items = [
    {
        key: "1",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                English
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                French
            </a>
        ),
        disabled: false,
    },
    {
        key: "3",
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                Spanish
            </a>
        ),
        disabled: false,
    },
];

const HeroPage = () => {
    const { token } = useToken();
    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: "none",
    };

    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen text-white z-10"
            style={{
                backgroundColor: 'transparent',
                fontFamily: 'sans-serif'
            }}
        >

            <header className="absolute top-8 w-full flex justify-center items-center text-sm font-light tracking-wider px-8">
                <nav className="flex space-x-6">
                    <a
                        href="/about"
                        className="text-gray-400 hover:text-white transition duration-200"
                    >
                        About
                    </a>
                    <a
                        href="/projects"
                        className="text-gray-400 hover:text-white transition duration-200"
                    >
                        Projects
                    </a>
                    <a
                        href="/experience"
                        className="text-gray-400 hover:text-white transition duration-200"
                    >
                        Experience
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-400 hover:text-white transition duration-200"
                    >
                        Contact
                    </a>
                </nav>

                <div className="absolute right-8 flex items-center gap-4">
                    <div className="">
                        <Dropdown
                            className=""
                            menu={{ items }}
                            popupRender={(menu) => (
                                <div style={contentStyle}>
                                    {React.cloneElement(menu, { style: menuStyle })}
                                    <Divider style={{ margin: 0 }} />
                                </div>
                            )}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className="hover:underline cursor-pointer">EN</Space>
                            </a>
                        </Dropdown>
                    </div>

                    <button className="border border-gray-600 text-white px-6 py-2 rounded-sm hover:bg-white/10 transition-colors">
                        hello@asad.fr
                    </button>
                </div>
            </header>

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                    width: '50vw',
                    height: '50vw',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    background: 'radial-gradient(circle, rgba(67, 65, 69, 0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: -1,
                }}
            />

            <main className="flex flex-col items-center max-w-4xl px-4">
                <h1 className="text-white italic font-exo-2" style={{
                    fontSize: '7.5rem',
                    lineHeight: 1,
                    letterSpacing: '-0.025em',
                    userSelect: 'none',
                    fontFamily: 'exo-2',
                }}>
                    Asad
                </h1>

                <p className="mt-8 text-lg text-gray-400 text-center max-w-xl">
                    I engineer high-performance{' '}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#9d63ff',
                            borderBottom: '1px solid rgba(157, 99, 255, 0.5)'
                        }}
                        className="hover:text-white transition duration-200"
                    >
                        Web Apps
                    </a>{' '}
                    that blend seamless user experiences with scalable architecture.
                </p>
            </main>

            <div className="absolute bottom-8 left-8">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center cursor-pointer">
                    <span className="text-pink-500 text-xl">🦄</span>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;